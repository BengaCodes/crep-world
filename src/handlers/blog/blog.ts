import prisma from '../../modules/db'

export const createBlog = async (req, res, next) => {
  try {
    const blog = await prisma.blog.create({
      data: {
        title: req?.body?.title,
        body: req?.body?.body,
        writtenById: req?.user?.id
      }
    })
    res.status(202).json(blog)
  } catch (e) {
    next(e)
  }
}

export const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await prisma.blog.findMany()
    res.status(200).json(blogs)
  } catch (e) {
    next(e)
  }
}

export const getABlog = async (req, res, next) => {
  try {
    const blog = await prisma.blog.findUnique({
      where: {
        id: req?.params?.id
      }
    })

    res.status(200).json(blog)
  } catch (e) {
    next(e)
  }
}

export const deleteBlog = async (req, res, next) => {
  try {
    const blog = await prisma.blog.findUnique({
      where: {
        id_writtenById: {
          id: req?.params?.id,
          writtenById: req?.user?.id
        }
      }
    })
    res.status(204).json({ message: `${blog.title} has been deleted` })
  } catch (e) {
    next(e)
  }
}

export const editBlog = async (req, res, next) => {
  try {
    const blog = await prisma.blog.update({
      where: {
        id_writtenById: {
          id: req?.params?.id,
          writtenById: req?.user?.id
        }
      },
      data: {
        ...req?.body
      }
    })
    res.status(202).json(blog)
  } catch (e) {
    next(e)
  }
}