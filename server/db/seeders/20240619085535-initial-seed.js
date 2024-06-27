'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Cupcakes',
      [
        {
          title: 'John Doe',
          description: 'false',
          img: 'http://klublady.ru/uploads/posts/2022-02/1644751985_51-klublady-ru-p-shokoladnie-kapkeiki-s-shokoladnim-kremom-53.jpg',
          price: '150',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'John Doe',
          description: 'false',
          img: 'http://klublady.ru/uploads/posts/2022-02/1644751985_51-klublady-ru-p-shokoladnie-kapkeiki-s-shokoladnim-kremom-53.jpg',
          price: '150',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'John Doe',
          description: 'false',
          img: 'http://klublady.ru/uploads/posts/2022-02/1644751985_51-klublady-ru-p-shokoladnie-kapkeiki-s-shokoladnim-kremom-53.jpg',
          price: '150',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {},
};
