import { mutation, query } from "./_generated/server";
import { v } from "convex/values";


export const createBlog = mutation({
    args: { title: v.string(), content: v.string(), author: v.string(), imageUrl: v.union(v.string(), v.null()) },
    handler: async (ctx, args) => {
        const createBlogId = await ctx.db.insert("blog", {
            title: args.title, content: args.content,
            author: args.author, imageUrl: args.imageUrl
        });
        return createBlogId;
    },
});

export const getBlogData = query({
    handler: async (ctx) => {
        return ctx.db.query("blog").collect();
    }
})