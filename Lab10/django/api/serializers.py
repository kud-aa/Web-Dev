from rest_framework import serializers
from .models import Vacancy, Company

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)
    description = serializers.CharField()
    city = serializers.CharField(max_length=255)
    address = serializers.CharField()

    def create(self, validated_data):
        return Company.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.address)
        instance.save()
        return instance

class VacancySerializer(serializers.ModelSerializer):
    company = CompanySerializer()

    class Meta:
        model = Vacancy
        fields = '__all__'

    def create(self, validated_data):
        company_data = validated_data.pop('company')
        company_serializer = CompanySerializer(data=company_data)
        if company_serializer.is_valid():
            company = company_serializer.save()
        else:
            raise serializers.ValidationError(company_serializer.errors)

        vacancy = Vacancy.objects.create(company=company, **validated_data)
        return vacancy

    def update(self, instance, validated_data):
        company_data = validated_data.pop('company')
        company_serializer = CompanySerializer(instance.company, data=company_data)
        if company_serializer.is_valid():
            company = company_serializer.save()
        else:
            raise serializers.ValidationError(company_serializer.errors)

        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.salary = validated_data.get('salary', instance.salary)
        instance.company = company
        instance.save()
        return instance
