import React from 'react';
import {
    StyledContainer,
    StyledTitle,
    StyledFiltersContainer} from "./FilterBar.styled";
import FilterButton from "./FilterButton";
import sliders from '../../../assets/icons/sliders.svg'

const FilterBar = () => {
    return (
        <StyledContainer>
            <StyledTitle>Products</StyledTitle>
            <StyledFiltersContainer>
                <FilterButton icon={sliders} label="Filters"/>
                <FilterButton icon="" label="Newest"/>
            </StyledFiltersContainer>
        </StyledContainer>
    );
};

export default FilterBar;
