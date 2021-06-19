import styled from "styled-components";
import {Conditions, Properties, SubConditions} from "./Filters";
import {Colors} from "../../styledHelpers/Colors";
import {FlexRow} from "../../styledHelpers/Grid";
import {FontSize} from "../../styledHelpers/FontSizes";
import {Breakpoint} from "../../styledHelpers/Breakpoint";
import {CarouselFlex} from "../../styledHelpers/Components";
import {useState} from "react";

export const EntitiesFilterContainer = styled.div`
  margin-top: 15px;
`;

export const EntitiesFilterWrapper = styled(CarouselFlex)`
  align-items: center;
  margin-top: 10px;
  
  i {
    font-size: ${FontSize["22"]};
  }
`;

export const EntitiesFilterSelect = styled.select`
  padding-right: 10px;
  margin-right: 10px;
  border: 0;
  background: transparent;
  color: ${Colors.blue};

  @media only screen and (min-width: ${Breakpoint["tablet"]}) {
    padding-right: 15px;
    margin-right: 20px;
  }

  &:hover {
    cursor: pointer;
  }

  &:focus, &:active, &:focus-visible {
    background: transparent;
    outline: none;
  }
`;

export const ValueInput = styled.input`
  min-width: 125px;
  padding: 3px 5px;

  @media only screen and (min-width: ${Breakpoint["tablet"]}) {
    max-width: 200px;
  }
`;

export const AddFilter = styled(FlexRow)`
  margin-top: 10px;
  
  div {
    display: flex;
    align-items: center;
    margin-right: 10px;
    color: ${Colors.blue};
    cursor: pointer;
    
    i {
      font-size: ${FontSize["22"]};
    }
  }
`

function EntitiesFilter() {
    const [elements, setElements] = useState<number[]>([1]);

    const addNewFilter = () => {
        setElements(oldElements => [...oldElements, elements[elements.length - 1] + 1]);
    };

    const removeFilter = (value: number) => {
        setElements(
            elements.filter((element) => element !== value)
        );
    }

    return (
        <EntitiesFilterContainer>
            {elements.map((value) => {
               return (
                   <EntitiesFilterWrapper key={value}>
                       <i className="bi bi-x" onClick={() => removeFilter(value)}/>
                       <EntitiesFilterSelect>
                           {Conditions.map((condition: string, index: number) => {
                               return (
                                   <option value={condition} key={index}>{condition}</option>
                               );
                           })}
                       </EntitiesFilterSelect>
                       <EntitiesFilterSelect>
                           {Properties.map((condition: string, index: number) => {
                               return (
                                   <option value={condition} key={index}>{condition}</option>
                               );
                           })}
                       </EntitiesFilterSelect>
                       <EntitiesFilterSelect>
                           {SubConditions.map((condition: string, index: number) => {
                               return (
                                   <option value={condition} key={index}>{condition}</option>
                               );
                           })}
                       </EntitiesFilterSelect>
                       <ValueInput placeholder="value"/>
                   </EntitiesFilterWrapper>
               )
            })}
            <AddFilter>
                <div onClick={addNewFilter}>
                    <i className="bi bi-plus"/>
                    <span>Add filter</span>
                </div>
                <EntitiesFilterSelect>
                    <option value="null">choose property</option>
                    {Properties.map((condition: string, index: number) => {
                        return (
                            <option value={condition} key={index}>{condition}</option>
                        );
                    })}
                </EntitiesFilterSelect>
            </AddFilter>
        </EntitiesFilterContainer>
    );
}

export default EntitiesFilter;
