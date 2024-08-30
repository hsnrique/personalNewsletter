"use server";

import Subscriber from "@/models/subscriber.model";
import { connectDb } from "@/shared/libs/db";
import { validateEmail } from "@/shared/utils/ZeroBounceApi";
import { clerkClient } from "@clerk/nextjs/server";

export const subscribe = async ({
  email,
  username,
}: {
  email: string;
  username: string;
}) => {
  try {
    await connectDb();

    // Fetch all users from Clerk
    const allUsersResponse = await clerkClient().users.getUserList();

    // first we need to fetch all users
    const allUsers = allUsersResponse.data;

    // now we need to find our newsletter owner
    const newsletterOwner = allUsers.find((i: any) => i.username === username);

    if (!newsletterOwner) {
      throw Error("Username is not vaild!");
    }

    // check if subscribers already exists
    const isSubscriberExist = await Subscriber.findOne({
      email,
      newsLetterOwnerId: newsletterOwner?.id,
    });

    if (isSubscriberExist) {
      return { error: "Email already exists!" };
    }

    // Validate email
    const validationResponse = await validateEmail({ email });
    if (validationResponse.status === "invalid") {
      return { error: "Email not valid!" };
    }

    // Create new subscriber
    const subscriber = await Subscriber.create({
      email,
      newsLetterOwnerId: newsletterOwner?.id,
      source: "By Nletterly website",
      status: "Subscribed",
    });
    return subscriber ? subscriber.toObject() : null;
  } catch (error) {
    console.error(error);
    return { error: "An error occurred while subscribing." };
  }
};