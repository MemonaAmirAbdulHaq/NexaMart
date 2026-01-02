
const express = require("express");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Shop = require("../model/shop");
const Event = require("../model/event");
const ErrorHandler = require("../utils/ErrorHandler");
const { isSeller, isAdmin, isAuthenticated } = require("../middleware/auth");
const router = express.Router();
const cloudinary = require("cloudinary");

/* =========================
   CREATE EVENT
========================= */
router.post(
  "/create-event",
  catchAsyncErrors(async (req, res, next) => {
    const shopId = req.body.shopId;
    const shop = await Shop.findById(shopId);

    if (!shop) {
      return next(new ErrorHandler("Shop Id is invalid!", 400));
    }

    let images = [];
    if (typeof req.body.images === "string") {
      images.push(req.body.images);
    } else {
      images = req.body.images;
    }

    const imagesLinks = [];
    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "products",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    const eventData = req.body;
    eventData.images = imagesLinks;
    eventData.shop = shop;

    const event = await Event.create(eventData);

    res.status(201).json({
      success: true,
      event,
    });
  })
);

/* =========================
   GET ALL EVENTS
========================= */
router.get(
  "/get-all-events",
  catchAsyncErrors(async (req, res) => {
    const events = await Event.find();
    res.status(200).json({
      success: true,
      events,
    });
  })
);

/* =========================
   GET EVENTS OF A SHOP
========================= */
router.get(
  "/get-all-events/:id",
  catchAsyncErrors(async (req, res) => {
    const events = await Event.find({ shopId: req.params.id });

    res.status(200).json({
      success: true,
      events,
    });
  })
);

/* =========================
   DELETE EVENT
========================= */
router.delete(
  "/delete-shop-event/:id",
  catchAsyncErrors(async (req, res, next) => {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return next(
        new ErrorHandler("Event not found with this id", 404)
      );
    }

    // Delete images from Cloudinary
    for (let i = 0; i < event.images.length; i++) {
      await cloudinary.v2.uploader.destroy(
        event.images[i].public_id
      );
    }

    // Delete event from database
    await Event.deleteOne({ _id: req.params.id });

    res.status(200).json({
      success: true,
      message: "Event deleted successfully!",
    });
  })
);

/* =========================
   ADMIN - ALL EVENTS
========================= */
router.get(
  "/admin-all-events",
  isAuthenticated,
  isAdmin("Admin"),
  catchAsyncErrors(async (req, res, next) => {
    const events = await Event.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      events,
    });
  })
);

module.exports = router;
