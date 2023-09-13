import { Image } from '@chakra-ui/react';
import React from 'react';

export const FlagComponent = ({ countryCode }) => {
  return (
    <Image
      boxSize="30px"
      objectFit="cover"
      borderRadius="full"
      src={`/flags/${countryCode}.svg`}
      alt={`${countryCode} flag`}
    />
  );
};
