import db from "../models";
import sequelize from 'sequelize';

export const addOrderDetail = (body) => new Promise(async(resolve, reject) => {
    try {
        const data = await db.Order.findOne({
            order:[['createdAt', 'DESC']]
        })
        var check = 1
        if(body.quantity < 1 || body.quantity > 5){
            check = 0
        }
        else{
            await db.OrderDetail.create({
            orderID: data.id,
            ...body
        })
        }
        resolve({
            err: check? 0: 1,
            mes: check? '' : 'Sản phẩm có số lượng bé hơn 1 hoặc lớn hơn 5 sẽ không được thêm vào đơn hàng'
        })
    } catch (error) {
        reject(error);
    }
})

export const getBestSellers = () => new Promise(async (resolve, reject) => {
    try {
      const response = await db.OrderDetail.findAll({
        attributes: [
          'productId',
          [sequelize.fn('SUM', sequelize.col('quantity')), 'total'],
        ],
        group: ['productId'],
        order: [[sequelize.literal('total'), 'DESC']],
        limit: 4,
        include: [
            {
              model: db.Product,
              as: 'productData',
              attributes: ['name', 'price', 'image']
            }
          ]
      });
      resolve({
        err: 0,
        bestSellerData: response
      });
    } catch (error) {
      reject(error);
    }
  });

export const getOneOrder = (id) => new Promise(async (resolve, reject) => {
    try {
      const response = await db.OrderDetail.findAll({
        where:{orderID: id},
        include:[
          {
          model: db.Product,
          as: 'productData',
          attributes:['name', 'image', 'price']
          }
        ]
      });
      resolve({
        err: 0,
        orderDetailData: response
      });
    } catch (error) {
      reject(error);
    }
  });