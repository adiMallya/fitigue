import React, { useState } from 'react';
import Select, { StylesConfig, SingleValue, ActionMeta } from 'react-select';

interface OptionType {
    value: string;
    label: string;
}

interface PropType {
  options: string[];
  placeholder: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  isDisabled?: boolean;
}

const CustomSelect: React.FC<PropType> = ({ options, placeholder, name, onChange, isDisabled }) : JSX.Element => {
    const userOptions: OptionType[] = options.map((option: string) => ({ value: option, label: option }));

    const [selectedValue, setSelectedValue] = useState<OptionType | null>(null);

    const customStyles: StylesConfig<OptionType> = {
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? '#0891b2' : state.isFocused ? '#06b6d4' : '#030712',
          color: 'white',
          cursor: isDisabled ? 'none' : 'pointer'
        }),
        menu: (provided) => ({
          ...provided,
          backgroundColor: '#1f2937',
          color: 'white',
        }),
        menuList: (provided) => ({
          ...provided,  
          maxHeight: '180px',
          overflow: 'auto'
        }),
        control: (provided) => ({
          ...provided,
          backgroundColor: '#030712',
          color: 'white',
          borderRadius: '1.5rem',
          padding: '0.25rem',
        }),
        singleValue: (provided) => ({
          ...provided,
          color: 'white'
        })
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const handleChange = (selectedOption: SingleValue<OptionType>, actionMeta: ActionMeta<OptionType>): void => {
        setSelectedValue(selectedOption);

        if (onChange && selectedOption) {
          const event = {
            target: {
              name: name,
              value: selectedOption?.value,
              type: 'select-one',
              checked: false
            }
          } as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;
          onChange(event);
        }
      }
    
      return (
        <Select
          name={name}
          options={userOptions}
          styles={customStyles}
          placeholder={placeholder}
          value={selectedValue}
          // @ts-ignore
          onChange={handleChange}
          isSearchable
          isDisabled={isDisabled}
        />
      );
}

export { CustomSelect };