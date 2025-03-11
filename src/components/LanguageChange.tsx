import React from "react";
import { Icon } from "@iconify/react";
type Props = {};

const LanguageChange = (props: Props) => {
  return (
    <div className="flex w-auto text-white items-center cursor-pointer">
      EN <Icon icon="si:expand-more-fill" width="24" height="24" />
    </div>
  );
};

export default LanguageChange;
