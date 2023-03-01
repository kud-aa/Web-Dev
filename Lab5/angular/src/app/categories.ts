export interface Category {
  id: number;
  name: string;
}

export const categories = [
  {
    id: 1,
    name: 'GPU',
    items: [
      {
        id: 1,
        url: 'https://kaspi.kz/shop/p/gigabyte-geforce-rtx-4070-ti-aero-oc-gv-n407taero-oc-12gd-12-gb-108358610/?c=750000000#!/item',
        name: 'Видеокарта GIGABYTE GeForce RTX 4070 Ti AERO OC GV-N407TAERO OC-12GD 12 ГБ',
        price: 540000,
        description: 'Серия: GeForce RTX 40 Series \n \
        Частота графического процессора: 2640 МГц \n \
        Объем видеопамяти: 12 ГБ \n \
        Тип видеопамяти: GDDR6X \n \
        Длина видеокарты: 336 мм \n \
        Рекомендуемая мощность блока питания: 750 Вт',
        image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h57/h6e/67678646337566/videokarta-12gb-rtx4070ti-gigabyte-aero-oc-gv-n407taero-oc-12gd-gddr6x-256bit-1-hdmi-3-dp-108358610-1.jpg',
        rating: 0.01
      },

      {
        id: 4,
        url: 'https://kaspi.kz/shop/p/zotac-gaming-rtx-4080-trinity-oc-zt-d40810j-10p-16-gb-108105062/?c=750000000#!/item',
        name: 'Видеокарта Zotac GAMING RTX 4080 Trinity OC ZT-D40810J-10P 16 ГБ',
        price: 694850,
        description: 'Серия: GeForce RTX 40 Series \n \
        Объем видеопамяти: 16 ГБ \n \
        Тип видеопамяти: GDDR6X \n \
        Длина видеокарты: 356.1 мм \n \
        Рекомендуемая мощность блока питания: 750 Вт',
        image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h10/h61/67450646855710/zotac-gaming-rtx-4080-trinity-oc-zt-d40810j-10p-16-gb-108105062-1.jpg',
        rating: 0.01
      },

      {
        id: 7,
        url: 'https://kaspi.kz/shop/p/inno3d-geforce-rtx-4070-ti-x3-n407t3-126x-186148n-12-gb-108358652/?c=750000000#!/item',
        name: 'Видеокарта Inno3D GeForce RTX 4070 Ti X3 N407T3-126X-186148N 12 ГБ',
        price: 431619,
        description: 'Серия: GeForce RTX 40 Series \n \
        Частота графического процессора: 2610 МГц \n \
        Объем видеопамяти: 12 ГБ \n \
        Тип видеопамяти: GDDR6X \n \
        Длина видеокарты: 297 мм \n \
        Рекомендуемая мощность блока питания: 700 Вт',
        image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hca/h48/67678653612062/inno3d-geforce-rtx-4070-ti-x3-n407t3-126x-186148n-12-gb-108358652-1.jpg',
        rating: 1
      }
    ]
  },

  {

    id: 2,
    name: 'CPU',
    items: [
      {
        id: 2,
        url: 'https://kaspi.kz/shop/p/amd-ryzen-7-5800x-box-100842724/?c=750000000#!/item',
        name: 'Процессор AMD Ryzen 7 5800X BOX',
        price: 124806,
        description: 'Тип процессора: Ryzen 7 \n \
        Сокет: AM4 \n \
        Базовая частота процессора: 3800 МГц \n \
        Максимальная частота процессора: 4700 МГц \n \
        Тип поставки: BOX \n \
        Количество ядер: 8',
        image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h76/h04/33160258355230/amd-ryzen-7-5800x-box-100842724-1-Container.jpg',
        rating: 3.8
      },

      {
        id: 5,
        url: 'https://kaspi.kz/shop/p/amd-ryzen-9-7900x-box-106788868/?c=750000000#!/item',
        name: 'Процессор AMD Ryzen 9 7900X BOX',
        price: 259635,
        description: 'Тип процессора: Ryzen 9 \n \
        Сокет: AM5 \n \
        Базовая частота процессора: 4700 МГц \n \
        Максимальная частота процессора: 5600 МГц \n \
        Тип поставки: BOX \n \
        Количество ядер: 12',
        image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h58/h99/63082176905246/amd-ryzen-9-7900x-box-106788868-1.jpg',
        rating: 1
      },

      {
        id: 8,
        url: 'https://kaspi.kz/shop/p/amd-ryzen-9-7900x-oem-107747479/?c=750000000#!/item',
        name: 'Процессор AMD Ryzen 9 7900X OEM',
        price: 266010,
        description: "Тип процессора: Ryzen 9 \n \
        Сокет: AM5 \n \
        Базовая частота процессора: 4700 МГц \n \
        Максимальная частота процессора: 5600 МГц \n \
        Тип поставки: OEM \n \
        Количество ядер: 12",
        image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h72/hbe/67096630296606/amd-ryzen-9-7900x-box-107747479-1.jpg' ,
        rating: 2
      },

      {
        id: 10,
        url: 'https://kaspi.kz/shop/p/amd-ryzen-7-5800x3d-oem-108098960/?c=750000000#!/item',
        name: 'Процессор AMD Ryzen 7 5800X3D OEM',
        price: 186807,
        description: 'Тип процессора: Ryzen 7 \n \
        Сокет: AM4 \n \
        Базовая частота процессора: 3400 МГц \n \
        Максимальная частота процессора: 4500 МГц \n \
        Тип поставки: OEM \n \
        Количество ядер: 8',
        image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc2/h82/67010466775070/amd-ryzen-7-5800x3d-108098960-1.jpg',
        rating: 5
      }
    ]
  },

  {

    id: 3,
    name: 'RAM',
    items: [ 

      {
        id: 3,
        url: 'https://kaspi.kz/shop/p/kingston-kf556c40bbak2-64-64-gb-105920208/?c=750000000#!/item',
        name: 'Оперативная память Kingston KF556C40BBAK2-64 64 Гб',
        price: 174990,
        description: '    Тип памяти: DDR5 \n \
        Форм-фактор: DIMM \n \
        Количество модулей в комплекте: 2 \n \
        Тактовая частота: 5600 Мгц',
        image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h02/h22/52651418517534/kingston-kf556c40bbak2-64-64-gb-105920208-1.jpg',
        rating: 1
      },

      {
        id: 6,
        url: 'https://kaspi.kz/shop/p/kingston-kf564c32rsak2-32-32-gb-106429911/?c=750000000#!/item',
        name: 'Оперативная память Kingston KF564C32RSAK2-32 32 Гб',
        price: 110720,
        description: '    Тип памяти: DDR5 \n \
        Форм-фактор: DIMM \n \
        Количество модулей в комплекте: 2 \n \
        Тактовая частота: 6400 МГц',
        image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9f/h7c/62426550960158/kingston-kf564c32rsak2-32-32-gb-106429911-1.jpg',
        rating: 1
      },

      {
        id: 9,
        url: 'https://kaspi.kz/shop/p/kingston-kf556c40bbk2-16-16-gb-104990698/?c=750000000#!/item',
        name: 'Оперативная память Kingston KF556C40BBK2-16 16 Гб',
        price: 47000,
        description: 'Тип памяти: DDR5 \n \
        Форм-фактор: DIMM \n \
        Количество модулей в комплекте: 2 \n \
        Тактовая частота: 5600 Мгц',
        image_url: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd9/hd7/51007707086878/kingston-kf556c40bbk2-16-16-gb-104990698-1.jpg',
        rating: 4.7
      }
    ]
  }
];
