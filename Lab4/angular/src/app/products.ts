export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  url: string;
  image_url: string;
}

export const products = [
  {
    id: 1,
    url: 'https://kaspi.kz/shop/p/gigabyte-geforce-rtx-4070-ti-aero-oc-gv-n407taero-oc-12gd-12-gb-108358610/?c=750000000#!/item',
    name: 'Видеокарта GIGABYTE GeForce RTX 4070 Ti AERO OC GV-N407TAERO OC-12GD 12 ГБ',
    price: new Intl.NumberFormat().format(540000),
    description: 'Серия: GeForce RTX 40 Series \
    Частота графического процессора: 2640 МГц \
    Объем видеопамяти: 12 ГБ \
    Тип видеопамяти: GDDR6X \
    Длина видеокарты: 336 мм \
    Рекомендуемая мощность блока питания: 750 Вт' + '\n' + 'sus',
    image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h57/h6e/67678646337566/videokarta-12gb-rtx4070ti-gigabyte-aero-oc-gv-n407taero-oc-12gd-gddr6x-256bit-1-hdmi-3-dp-108358610-1.jpg',
    rating: 1
  },
  {
    id: 2,
    url: 'https://www.w3schools.com/js/js_popup.asp',
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: ''
  },
  {
    id: 4,
    name: 'Phone Standard',
    price: 299,
    description: ''
  },
  {
    id: 5,
    name: 'Phone Standard',
    price: 299,
    description: ''
  },
  {
    id: 6,
    name: 'Phone Standard',
    price: 299,
    description: ''
  },
  {
    id: 7,
    name: 'Phone Standard',
    price: 299,
    description: ''
  },
  {
    id: 8,
    name: 'Phone Standard',
    price: 299,
    description: ''
  },
  {
    id: 9,
    name: 'Phone Standard',
    price: 299,
    description: ''
  },
  {
    id: 10,
    name: 'Phone Standard',
    price: 299,
    description: ''
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
