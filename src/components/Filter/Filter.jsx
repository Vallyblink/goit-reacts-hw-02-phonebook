import React from "react";
import {FilterContainer, FilterInput, Label} from './styledFilter';

export const Filter=({filter, onFilterChange})=>{
const handleFilterChange = (event) => {
    onFilterChange(event.target.value);
    };
    console.log('Filter')

return(
    <FilterContainer>  
        <Label> Find contacts by name!
        <FilterInput type="text"
            value={filter}
            onChange={handleFilterChange} />
        </Label>
       
    </FilterContainer> )
  
}