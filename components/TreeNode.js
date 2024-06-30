import React, { useState } from 'react';

const TreeNode = ({ node, updateNodeValue }) => {
    const [value, setValue] = useState(node.value);

    const handleValueChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        updateNodeValue(node, newValue);
    };

    return (
        <div style={{ marginLeft: '20px' }}>
            <input
                type="number"
                value={value}
                onChange={handleValueChange}
            />
            {node.children && node.children.length > 0 && (
                <div>
                    {node.children.map((child, index) => (
                        <TreeNode
                            key={index}
                            node={child}
                            updateNodeValue={updateNodeValue}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TreeNode;
