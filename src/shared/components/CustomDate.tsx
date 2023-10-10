import React, { ForwardedRef, forwardRef, ReactElement } from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type CustomDateInputProps = {
  value?: string;
  onClick?: () => void;
};

type DateComponentProps = {
  value?: Date | null;
  onChange: (date: Date) => void;
  datePickerProps?: Omit<ReactDatePickerProps, 'selected' | 'onChange'>;
};

const CustomDateInput = forwardRef((props: CustomDateInputProps, ref: ForwardedRef<HTMLInputElement>): ReactElement => (
  <input
    {...props}
    ref={ref}
    placeholder='Select a date'
    className="bg-gray-950 py-2 px-5 rounded-full outline-none border-2 border-slate-100 text-slate-400"
  />
));

const CustomDate: React.FC<DateComponentProps> = ({ value, onChange, datePickerProps }) => (
  <DatePicker
    selected={value}
    onChange={onChange}
    customInput={<CustomDateInput />}
    {...datePickerProps}
  />
);

export { CustomDate };
