"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type UserAvatarProps = {
  src: string;
  alt: string;
};

export function UserAvatar({ src, alt }: UserAvatarProps) {
  return (
    <Avatar>
      <AvatarImage
        src={src || "/images/profile.min.svg"}
        alt={alt || "avatar"}
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
