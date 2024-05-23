import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    blog: defineTable({
        author: v.string(),
        content: v.string(),
        imageUrl: v.union(v.null(), v.string()),
        title: v.string(),
    }),
});