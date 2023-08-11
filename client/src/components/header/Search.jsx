import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";


import { InputBase,Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const SearchContainer = styled(Box)`
    border-radius: 2px;
    margin-left: 10px;
    width: 38%;
    background-color: #fff;
    display: flex;
`;

const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue; 
`;

const ListWrapper = styled(List)`
    position: absolute;
    background: #FFFFFF;
    color: #000;
    margin-top: 36px;
`;



const Search = () => {

    const [text, setText] = useState('');

    const {products} = useSelector(state => state.getProducts);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const gatText = (text) => {
        setText(text);
    }

    return (
        <SearchContainer>
            <InputSearchBase 
                placeholder="Search for products, brands and more"
                onChange={(e) => gatText(e.target.value)}
                value={text}
            /> 
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            {
                text && 
                    <ListWrapper>
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                <ListItem>
                                    <Link
                                        to={`/product/${product.id}`}
                                        onClick={() => setText('')}
                                        style={{textDecoration: 'none',color:'inherit'}}
                                    >
                                        {product.title.longTitle}
                                    </Link>
                                    
                                </ListItem>
                            ))
                        }
                    </ListWrapper>
            }
        </SearchContainer>
        
    )

}


export default Search;