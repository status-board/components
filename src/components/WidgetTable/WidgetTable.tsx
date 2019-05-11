import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 1.6vmin;
`;

const WidgetTable = ({ children }: { children: ReactNode }) => <Table>{children}</Table>;

// WidgetTable.propTypes = {
//     children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
// };

export default WidgetTable;
