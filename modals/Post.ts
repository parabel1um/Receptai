import mongoose, { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  time: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  username: {
    type: String,
  },
});

PostSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

const Post = models?.Post || model("Post", PostSchema);

export default Post;
