import Video from "../models/Video.js"
import { createError } from "../error.js";



export const addVideo = async (req, res, next) => {
    const newVideo = new Video({ userId: req.user.id, ...req.body });
    try {
        const saveVideo = await newVideo.save()
        res.status(200).json(saveVideo);
    } catch (err) {
        next(err)
    }
}

export const updateVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!Video) return next(createError(404, "Video not found!"))
        if (req.user.id === video.userId) {
            const updatedVideo = await Video.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body
                },
                { new: true }
            );
            res.status(200).json(updatedVideo)
        } else {
            return next(createError(403, "Video can update only your videos!"))
        }
    } catch (err) {
        next(err)
    }
}

export const deleteVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!Video) return next(createError(404, "Video not found!"))
        if (req.user.id === video.userId) {
            await Video.findByIdAndDelete(
                req.params.id,
            );
            res.status(200).json("Video has been deleted")
        } else {
            return next(createError(403, "Video can delete only your videos!"))
        }
    } catch (err) {
        next(err)
    }
}

export const getVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        res.status(200).json(video)
    } catch (err) {
        next(err)
    }
}

export const addView = async (req, res, next) => {
    try {
        await Video.findByIdAndUpdate(req.params.id,
            {
                $inc: { views: 1 }
            })
        res.status(200).json("The view has been increased.")
    } catch (err) {
        next(err)
    }
}

export const trend = async (req, res, next) => {
    try {
        const videos = await Video.find().sort({ views: -1 });
        res.status(200).json(videos)
    } catch (err) {
        next(err)
    }
}

export const random = async (req, res, next) => {
    try {
        const videos = await Video.aggregate([{ $sample: { size: 40 } }])
        res.status(200).json(videos)
    } catch (err) {
        next(err)
    }
}

export const getByTag = async (req, res, next) => {
    const tags = req.query.tags.split(",")
    console.log(tags)
    try {

        const videos = await Video.find({ tags: { $in: tags } }).limit(20);
        res.status(200).json(videos)
    } catch (err) {
        next(err)
    }
}

export const search = async (req, res, next) => {
    const query = req.query.q
    try {
        const videos = await Video.find({
            title: { $regex: query, $options: "i" },
        }).limit(40);
        res.status(200).json(videos)
    } catch (err) {
        next(err)
    }
}
