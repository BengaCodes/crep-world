import prisma from '../../modules/db'


export const createTrainers = async (req, res, next) => {
  try {
    const trainers = await prisma.trainers.create({
      data: {
        name: req?.body?.name,
        price: req?.body?.price,
        purchaseLocation: req?.body?.purchaseLocation,
        description: req?.body?.description,
        belongsToId: req?.user.id
      }
    })
    res.status(202).json(trainers)
  } catch (e) {
    next(e)
  }
}


export const getAllTrainers = async (req, res, next) => {
  try {
    const trainers = await prisma.trainers.findMany()
    res.status(200).json(trainers)
  } catch (e) {
    next(e)
  }
}