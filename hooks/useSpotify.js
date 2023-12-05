"use client";
import spotifyApi from "@/lib/spotify";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

function useSpotify() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      //if the token is broken we pushed the user to the signin page
      if (session.error === "refreshedTokenError") {
        signIn();
      }
      spotifyApi.setAccessToken(session.user.accessToken);
    }
  }, [session]);
  return spotifyApi;
}

export default useSpotify;
