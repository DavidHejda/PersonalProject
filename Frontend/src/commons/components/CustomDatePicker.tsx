import React, { forwardRef, useState } from 'react';
import { Box, Input, useColorMode, useTheme } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';

interface CustomDatePickerProps {
  value: Date;
  onChange: (date: Date) => void;
  dateFormat?: string;
  placeholder?: string;
  name?: string;
}

const CustomInput = forwardRef(({ value, onClick }: any, ref: any) => {
  return (
    <Input
      ref={ref}
      onClick={onClick}
      value={value}
      readOnly
      opacity="0"
      width="100%"
      //   display={'none'}
      //   height="100%" // Added this to span full heights
      zIndex="10" // Higher than DatePicker
      pointerEvents="auto" // Make sure this can capture click
      _focus={{
        borderColor: 'transparent',
      }}
    />
  );
});

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  value,
  onChange,
  dateFormat = 'MM/dd/yyyy',
  placeholder = 'Select date',
  name,
}) => {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const borderColor =
    colorMode === 'light' ? theme.colors.gray[200] : theme.colors.gray[600];
  const focusBorderColor = theme.colors.blue[500];

  const handleDateChange = (date: Date) => {
    onChange(date);
    setIsOpen(false); // Close the calendar after selecting the date
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      borderColor={borderColor}
      backgroundColor={
        colorMode === 'light' ? theme.colors.white : theme.colors.gray[800]
      }
      color={colorMode === 'light' ? theme.colors.black : theme.colors.white}
      borderRadius="md"
      borderWidth="1px"
      p="1"
      position="relative"
      _focusWithin={{
        boxShadow: `0 0 0 1px ${focusBorderColor}`,
        borderColor: focusBorderColor,
      }}
    >
      <DatePicker
        selected={value}
        onChange={handleDateChange}
        dateFormat={dateFormat}
        open={isOpen}
        onClickOutside={handleClose}
        customInput={
          <button
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Box
              position="absolute"
              top="50%"
              left="8px"
              transform="translateY(-50%)"
              pointerEvents="none"
            >
              {value instanceof Date ? value.toLocaleDateString() : placeholder}
            </Box>
          </button>
        }
        name={name}
      />
    </Box>
  );
};
export default CustomDatePicker;
