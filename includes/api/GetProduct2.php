<?PHP
require_once "../DataBase/database.php";
$conn=Connect();
$sth = $conn->prepare("SELECT * FROM product");
$sth->execute();
$row = $sth->fetchAll(PDO::FETCH_ASSOC);
$result=$row;
echo json_encode($result);

// foreach($result as $data){
//     echo '<tr>
//             <td class="id">'.$data['id'].'</td>                                       
//             <td class="name">'.$data['Name'].'</td>                                    
//             <td class="cat">'.$data['Category'].'</td>
//             <td class="price">'.$data['Price'].'</td>
//             <td class="quantity">'.$data['Quantity'].'</td>
//             <td class="disc">'.$data['Discount'].'</td>
//             <td class="desc">'.$data['Description'].'</td>
//             <td class="td-btn">
//                 <a href="#editEmployeeModal" class="edit btnupdate" data-toggle="modal"><i class="fa-regular fa-pen-to-square" data-toggle="tooltip" title="Edit"></i></a>
//                 <a href="#deleteEmployeeModal"  class="delete" data-toggle="modal"><i class="fa-regular fa-trash-can" data-toggle="tooltip" title="Delete"></i></a>
//             </td>
//           </tr>';
// }