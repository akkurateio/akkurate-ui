import React from 'react';
import {InterfaceTree} from "./InterfaceTree";
import TreeChild from "./TreeChild";

interface IProps {
    tree: InterfaceTree[];
}

const TreeSecond: React.FC<IProps> = ({tree}) => {
    return (
        <>
            {tree.map((child) => (
                <TreeChild child={child} key={child.id} />
            ))}
        </>
    );
};

export default TreeSecond;
