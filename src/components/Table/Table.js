import React, {Component} from 'react';
import './Table.css';
import Badge from '../Badge/Badge';

class Table extends Component {

    render() {
        return (
        		<div className="inte__tableWrap">
        			<table className="inte__table inte--layoutFixed inte__table--alignLeft">
        				<colgroup>
                            <col style={{width: "300px"}}/>
                            <col style={{width: "200px"}}/>
                            <col style={{width: "200px"}}/>
        					<col style={{width: "250px"}}/>
        				</colgroup>
        				<thead>
        					<tr>
        						<th>PAGE NAME</th>
        						<th className="inte__table-cellCenter">AUTHENTICATION</th>
        						<th className="inte__table-cellCenter">PAYMENT</th>
        						<th></th>
        					</tr>
        				</thead>
        				<tbody>
        					<tr>
        						<td>
        							<span className="inte__table-title">Cedcommerce Shop 1</span>
        						</td>
        						<td className="inte__table-cellCenter">
        							<Badge type="Success">Complete</Badge>
        						</td>
        						<td className="inte__table-cellCenter">
        							<Badge type="Error">Error</Badge>
        						</td>
        						<td className="inte__table-cellRight">
        							<button type="" className="inte-btn inte-btnNarrow inte-btn--Outlined">
        								<span className="inte__text">CONFIGURE CMS</span>
        							</button>
        						</td>
        					</tr>
        					<tr>
        						<td>
        							<span className="inte__table-title">Cedcommerce Shop 2</span>
        						</td>
        						<td className="inte__table-cellCenter">
        							<Badge type="Success">Complete</Badge>
        						</td>
        						<td className="inte__table-cellCenter">
        							<Badge type="Error">Error</Badge>
        						</td>
        						<td className="inte__table-cellRight">
        							<button type="" className="inte-btn inte-btnNarrow inte-btn--Outlined">
        								<span className="inte__text">CONFIGURE CMS</span>
        							</button>
        						</td>
        					</tr>
        					<tr>
        						<td>
        							<span className="inte__table-title">Cedcommerce Shop 3</span>
        						</td>
        						<td className="inte__table-cellCenter">
        							<Badge type="Success">Complete</Badge>
        						</td>
        						<td className="inte__table-cellCenter">
        							<Badge type="Error">ERROR</Badge>
        						</td>
        						<td className="inte__table-cellRight">
        							<button type="" className="inte-btn inte-btnNarrow inte-btn--Outlined">
        								<span className="inte__text">CONFIGURE CMS</span>
        							</button>
        						</td>
        					</tr>
        				</tbody>
        			</table>
        		</div>
        	) ;
    }
}

export default Table;