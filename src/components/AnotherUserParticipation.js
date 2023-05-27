import React from "react";

export const AnotherUserParticipation = () => {
  return (
    <div>
      <div>Another User Participation</div>
      <button onClick={() => navigate("order-summary", { replace: true })}>
        Place Order
      </button>
    </div>
  );
};
