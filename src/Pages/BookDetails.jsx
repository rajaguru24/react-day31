import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Details = ({ setId }) => {
  const [details, setDetails] = useState([]);

  const navigate = useNavigate();

  const [deleteData, setDeleteData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => {
    await axios
      .get("https://6642ed733c01a059ea20d1e5.mockapi.io/api/task_data")
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  };

  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`https://6642ed733c01a059ea20d1e5.mockapi.io/api/task_data/${id}`)
      .then((res) => setDeleteData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="table-responsive p-2 ">
        <table className="table table-dark align-middle table-striped">
          <thead className="text-center">
            <tr>
              <th scope="col">Sl No</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Website</th>
              <th scope="col">Company</th>
              <th scope="col" colSpan={2}>
                Action
              </th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {details.map((element, index) => {
              return (
                <tr>
                  <th scope="row">{element.id}</th>
                  <td>{element.name}</td>
                  <td>{element.username}</td>
                  <td>{element.email}</td>
                  <td>
                    {element.address.street},{element.address.suite},<br />
                    {element.address.city},{element.address.zipcode}
                  </td>
                  <td>{element.phone}</td>
                  <td>{element.website}</td>
                  <td>
                    <span className="fw-bold">Company Name :</span>{" "}
                    {element.company.companyName},<br />
                    <span className="fw-bold"> Company Catch Phrase : </span>
                    {element.company.catchPhrase},<br />
                    <span className="fw-bold"> Company Strategy: </span>
                    {element.company.bs}
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        handleEdit(element.id);
                      }}
                    >
                      <span class="fa-sharp fa-solid fa-user-pen">
                        &nbsp;Edit
                      </span>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger "
                      onClick={() => {
                        handleDelete(element.id);
                      }}
                    >
                      <i class="fa-sharp fa-solid fa-trash ">&nbsp;Delete</i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          className="btn btn-info m-4 fs-5"
          onClick={() => {
            navigate("/create");
          }}
        >
          <i class="fa-solid fa-user-plus"></i>&nbsp; Create
        </button>
      </div>
    </>
  );
};

export default Details;