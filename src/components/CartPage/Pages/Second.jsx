"use client";

import DeliveryInfoMain from "../DeliveryInfoMain";

const Second = ({ handleChange, SetCurrAddress }) => {
	return (
		<>
			<DeliveryInfoMain handleSenderChange={handleChange} setCurrentAddress={SetCurrAddress} />
		</>
	);
};

export default Second;
