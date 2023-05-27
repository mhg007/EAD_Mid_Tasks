import React from "react";
import { useNavigate } from "react-router-dom";

export const UserParticipation = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>User 1</div>
      <button onClick={() => navigate("order-summary", { replace: true })}>
        Place Order
      </button>
    </>
  );
};
