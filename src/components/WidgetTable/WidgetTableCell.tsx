import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

const Cell = styled.td`
    padding: 1vmin 2vmin;
`;

const WidgetTableCell = ({ children }: { children: ReactNode }) => <Cell>{children}</Cell>;

// WidgetTableCell.propTypes = {
//     children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
// };

export default WidgetTableCell;
