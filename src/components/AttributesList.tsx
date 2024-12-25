import { Dispatch, ReactNode, SetStateAction, useMemo, useState } from "react";
import { ATTRIBUTE_LIST } from "../consts";
import { Attributes } from "../types";

export type AttributesListProps = {
    attributes: Attributes;
    setAttributes: Dispatch<SetStateAction<Attributes>>;
};

const AttributesList = ({ attributes, setAttributes }: AttributesListProps) => {
    const shouldModifierChange = (value: number, operation: string) => {
        const isEven = value % 2 == 0;
        if (operation === 'minus') {
            return isEven ? false : true;
        } else {
            return isEven ? true : false;
        }
    }

    const settingAttributes = (attribute: string, operation: string) => {
        if (operation === 'minus') {
            setAttributes((attributesOld) => ({
                ...attributesOld,
                [attribute]: {
                    value: attributesOld[attribute]['value'] - 1,
                    modifier: shouldModifierChange(attributesOld[attribute]['value'] - 1, operation) ?
                        attributesOld[attribute]['modifier'] - 1 : attributesOld[attribute]['modifier']
                }
            }));
        } else {
            setAttributes((attributesOld) => ({
                ...attributesOld,
                [attribute]: {
                    value: attributesOld[attribute]['value'] + 1,
                    modifier: shouldModifierChange(attributesOld[attribute]['value'] + 1, operation) ?
                        attributesOld[attribute]['modifier'] + 1 : attributesOld[attribute]['modifier']
                }
            }));
        }
    };

    const attributesElements = ATTRIBUTE_LIST.map((attribute) => {
        return (<div className="Attribute">
            <span>{attribute}: {attributes[attribute]['value']}</span>{' '}
            <button onClick={(event) => settingAttributes(attribute, "plus")}>+</button>
            <button onClick={(event) => settingAttributes(attribute, "minus")}>-</button>
            <p>Modifier: {attributes[attribute]['modifier']}</p>
        </div>);
    });

    return (
        <div className="attributes">
            <h2>Attributes</h2>
            <div>
                {attributesElements}
            </div>
        </div >
    )
}

export default AttributesList;