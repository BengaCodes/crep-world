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

export const getATrainer = async (req, res, next) => {
  try {
    const trainer = await prisma.trainers.findUnique({
      where: {
        id: req?.params?.id
      }
    })
    if (!trainer) {
      res.status(404).json({ message: 'Trainers not found!' })
    }
    res.status(200).json(trainer)
  } catch (e) {
    next(e)
  }
}

export const getUsersTrainers = async (req, res, next) => {
  try {
    const trainers = await prisma.trainers.findMany({
      where: {
        belongsToId: req?.user?.id
      }
    })
    res.status(200).json(trainers)
  } catch (e) {
    next(e)
  }
}

export const editTrainers = async (req, res, next) => {
  try {
    const trainer = await prisma.trainers.update({
      where: {
        id_belongsToId: {
          id: req?.params?.id,
          belongsToId: req?.user?.id
        }
      },
      data: {
        ...req.body
      }
    })
    res.status(202).json(trainer)
  } catch (e) {
    next(e)
  }
}

export const deleteTrainers = async (req, res, next) => {
  try {
    const trainer = await prisma.trainers.delete({
      where: {
        id_belongsToId: {
          id: req?.params?.id,
          belongsToId: req?.user?.id
        }
      }
    })
    res.status(204).json(trainer)
  } catch (e) {
    next(e)
  }
}