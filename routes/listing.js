const express =require("express");
const router = express.Router();
const wrapAsync= require("../utils/wrapAsync.js");
const{listingSchema,reviewSchema}=require("../schema.js");
const Listing = require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing} =require("../middleware.js");
const listingControllers= require("../controllers/listings.js");
const multer=require('multer');
const{storage}=require("../cloudConfig.js");
const upload=multer({storage});

router.route("/")
.get(wrapAsync(listingControllers.index))
.post(isLoggedIn,upload.single("listing[image]"),wrapAsync(listingControllers.createlistings));

 //New Route
router.get("/new", isLoggedIn,listingControllers.renderNewForm);
  
router.route("/:id")
.get(wrapAsync( listingControllers.showlistings))
.put( isLoggedIn,isOwner,upload.single("listing[image]"),validateListing,wrapAsync(listingControllers.updatelistings))
.delete(isLoggedIn,isOwner,wrapAsync(listingControllers.destroylistings));

 //Edit Route
 router.get("/:id/edit", isLoggedIn,wrapAsync(listingControllers.editlistings));
 
 module.exports=router;
 