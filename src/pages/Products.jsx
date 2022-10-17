import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import ProductsItems from "../components/ui/productItems/index"
import { 
  StyledContainer,
  StyledTitle,
  StyledFiltersContainer,
  StyledSelect,
  Select
} from '../components/ui/filterBar/FilterBar.styled';

function Products() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [sort, setSort] = useState("new");

    return (
      <div>
        <StyledContainer>
            <StyledTitle>Products</StyledTitle>
            <StyledFiltersContainer>
                <StyledSelect>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <option disabled>Sort by</option>
                        <option value="new">Newest</option>
                        <option value="asc">Price (asc)</option>
                        <option value="desc">Price (desc)</option>
                    </Select>
                </StyledSelect>
            </StyledFiltersContainer>
        </StyledContainer>
        <ProductsItems cat={cat} sort={sort} />
      </div>
    );
}

export default Products;