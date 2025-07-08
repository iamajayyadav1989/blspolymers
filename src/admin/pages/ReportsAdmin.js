import React, { useState, useEffect } from "react";
import axios from "axios";
import { adminBaseUrl } from "../../App";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CFormInput,
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from "@coreui/react";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editYear, setEditYear] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editFile, setEditFile] = useState(null);

  const fetchReports = async () => {
    try {
      const res = await axios.get(`${adminBaseUrl}/api/reports`);
      setReports(res.data);
    } catch (err) {
      console.error("Error fetching reports:", err);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this report?")) return;
    try {
      await axios.delete(`${adminBaseUrl}/api/reports/${id}`);
      fetchReports();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const startEditing = (report) => {
    setEditingId(report._id);
    setEditYear(report.year);
    setEditTitle(report.title);
    setEditFile(null);
  };

  const handleSaveEdit = async () => {
    const formData = new FormData();
    formData.append("year", editYear);
    formData.append("title", editTitle);
    if (editFile) formData.append("file", editFile);

    try {
      await axios.put(`${adminBaseUrl}/api/reports/${editingId}`, formData);
      setEditingId(null);
      fetchReports();
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <CCard>
      <CCardHeader>
        <h4 className="text-primary">Manage Annual Reports</h4>
      </CCardHeader>
      <CCardBody>
        <CTable striped responsive>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>Year</CTableHeaderCell>
              <CTableHeaderCell>Title</CTableHeaderCell>
              <CTableHeaderCell>Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {reports.map((report) => (
              <CTableRow key={report._id}>
                <CTableDataCell>
                  {editingId === report._id ? (
                    <CFormInput
                      value={editYear}
                      onChange={(e) => setEditYear(e.target.value)}
                    />
                  ) : (
                    report.year
                  )}
                </CTableDataCell>
                <CTableDataCell>
                  {editingId === report._id ? (
                    <CFormInput
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                    />
                  ) : (
                    report.title
                  )}
                </CTableDataCell>
                <CTableDataCell>
                  {editingId === report._id ? (
                    <>
                      <CFormInput
                        type="file"
                        accept="application/pdf"
                        onChange={(e) => setEditFile(e.target.files[0])}
                      />
                      <CButton
                        color="success"
                        size="sm"
                        className="me-2 mt-2"
                        onClick={handleSaveEdit}
                      >
                        Save
                      </CButton>
                      <CButton
                        color="secondary"
                        size="sm"
                        className="mt-2"
                        onClick={() => setEditingId(null)}
                      >
                        Cancel
                      </CButton>
                    </>
                  ) : (
                    <>
                      <CButton
                        color="info"
                        size="sm"
                        className="me-2"
                        onClick={() => startEditing(report)}
                      >
                        Edit
                      </CButton>
                      <CButton
                        color="danger"
                        size="sm"
                        onClick={() => handleDelete(report._id)}
                      >
                        Delete
                      </CButton>
                    </>
                  )}
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  );
};

export default Reports;
