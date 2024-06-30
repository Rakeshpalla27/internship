import React from 'react';
import TreeNode from './TreeNode';

const Tree = ({ data, setData }) => {
    const updateNodeValue = (node, newValue) => {
        node.value = newValue;
        setData({ ...data });
    };

    return (
        <div>
            <TreeNode node={data} updateNodeValue={updateNodeValue} />
        </div>
    );
};

export default Tree;
