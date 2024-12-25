import { useState } from "react";
import { ATTRIBUTE_LIST, CLASS_LIST, CLASS_REQS } from "../consts";
import { Attributes } from "../types";

export type ClassesProps = {
    attributes: Attributes;
};

const Classes = ({ attributes }: ClassesProps) => {
    const [selectedClass, setSelectedClass] = useState<string>(null);
    const isClassValid = (className: string): boolean => {
        const classAttributes: Attributes = CLASS_REQS[className];
        for (const attribute of ATTRIBUTE_LIST) {
            console.log(classAttributes[attribute], attributes[attribute]);
            if (classAttributes[attribute]['value'] > attributes[attribute]['value']) {
                return false;
            }
        };
        return true;
    };

    const onClickClass = (className: string) => {
        if (selectedClass === className) {
            setSelectedClass(null);
            return;
        }
        setSelectedClass(className);
    };

    const getCSSClassNames = ((className: string) => {
        const names = [];
        isClassValid(className) ? names.push('classNameGreen') : names.push('classNameRed');
        if (selectedClass === className) {
            names.push('ClassClicked');
        }
        return names.join(' ');
    });

    const classElements = CLASS_LIST.map((className) => {
        return (
            <p className={getCSSClassNames(className)}
                onClick={(event) => onClickClass(className)}>{className}</p>
        )
    });

    const classRequirements = (className: string) => {
        const classAttributes: Attributes = CLASS_REQS[className];
        return Object.entries(classAttributes).map(([attribute, value]) => {
            return <div>
                <span>{attribute}: {value.value}</span>
            </div>
        });
    }

    return (
        <div className="classes">
            <h2>Classes</h2>
            {classElements}
            {selectedClass && (<div>
                <p>{selectedClass} Requirements</p>
                {classRequirements(selectedClass)}
            </div>)}
        </div>
    );
};

export default Classes;