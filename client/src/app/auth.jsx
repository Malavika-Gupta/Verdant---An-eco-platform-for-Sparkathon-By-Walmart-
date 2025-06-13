"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePersistLoginQuery } from "@/services/auth/authApi";
import { addUser } from "@/features/auth/authSlice";
import { toast } from "react-hot-toast";

const Auth = ({ children }) => {
  const dispatch = useDispatch();
  const { data: userData, error: userError } = usePersistLoginQuery();

  useEffect(() => {
    if (userData && !userError) {
      toast.success(userData?.description, { id: "auth" });
      dispatch(addUser(userData?.data || {}));
    }

    if (userError?.data) {
      toast.error(userError?.data?.description, { id: "auth" });
    }
  }, [userData, userError, dispatch]);

  return <>{children}</>;
};

export default Auth;
