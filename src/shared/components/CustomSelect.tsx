import React, { useState } from 'react';
import Select, { StylesConfig, SingleValue, ActionMeta} from 'react-select';

interface OptionType {
    value: string;
    label: string;
}

interface PropType {
  options: string[];
  placeholder: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const CustomSelect: React.FC<PropType> = ({ options, placeholder, name, onChange }) : JSX.Element => {
    const userOptions: OptionType[] = options.map((option: string) => ({ value: option, label: option }));

    const customStyles: StylesConfig<OptionType> = {
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? '#0891b2' : state.isFocused ? '#06b6d4' : '#030712',
          color: 'white',
          cursor: 'pointer'
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
      
      const [selectedValue, setSelectedValue] = useState<OptionType | null>(null);

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
          onChange={handleChange}
          isSearchable
        />
      );
}

export { CustomSelect };