import React, { useState } from "react";
import { Box, Heading, Text, Flex, Image, Button, Input, Textarea, Select, Grid, GridItem } from "@chakra-ui/react";
import { FaPlus, FaSearch } from "react-icons/fa";

const Index = () => {
  const [reports, setReports] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newReport, setNewReport] = useState({
    patientName: "",
    date: "",
    modality: "",
    findings: "",
    impression: "",
  });

  const handleInputChange = (e) => {
    setNewReport({ ...newReport, [e.target.name]: e.target.value });
  };

  const handleAddReport = () => {
    setReports([...reports, newReport]);
    setNewReport({
      patientName: "",
      date: "",
      modality: "",
      findings: "",
      impression: "",
    });
  };

  const filteredReports = reports.filter((report) => report.patientName.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Box p={8}>
      <Flex align="center" justify="space-between" mb={8}>
        <Heading as="h1" size="xl">
          Radiologist Dashboard
        </Heading>
        <Image src="https://images.unsplash.com/photo-1576670159375-8beb7c963ead?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyYWRpb2xvZ2lzdCUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMDc2OTgxN3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Radiologist" w={16} h={16} borderRadius="full" />
      </Flex>

      <Flex mb={8}>
        <Input placeholder="Search reports..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} mr={4} />
        <Button leftIcon={<FaSearch />}>Search</Button>
      </Flex>

      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {filteredReports.map((report, index) => (
          <GridItem key={index} borderWidth={1} borderRadius="md" p={4}>
            <Heading as="h2" size="md" mb={2}>
              {report.patientName}
            </Heading>
            <Text mb={1}>
              <strong>Date:</strong> {report.date}
            </Text>
            <Text mb={1}>
              <strong>Modality:</strong> {report.modality}
            </Text>
            <Text mb={1}>
              <strong>Findings:</strong> {report.findings}
            </Text>
            <Text>
              <strong>Impression:</strong> {report.impression}
            </Text>
          </GridItem>
        ))}
      </Grid>

      <Box mt={8}>
        <Heading as="h2" size="lg" mb={4}>
          New Report
        </Heading>
        <Input placeholder="Patient Name" name="patientName" value={newReport.patientName} onChange={handleInputChange} mb={4} />
        <Input placeholder="Date" name="date" value={newReport.date} onChange={handleInputChange} mb={4} />
        <Select placeholder="Select Modality" name="modality" value={newReport.modality} onChange={handleInputChange} mb={4}>
          <option value="X-ray">X-ray</option>
          <option value="CT">CT</option>
          <option value="MRI">MRI</option>
          <option value="Ultrasound">Ultrasound</option>
        </Select>
        <Textarea placeholder="Findings" name="findings" value={newReport.findings} onChange={handleInputChange} mb={4} />
        <Textarea placeholder="Impression" name="impression" value={newReport.impression} onChange={handleInputChange} mb={4} />
        <Button leftIcon={<FaPlus />} onClick={handleAddReport}>
          Add Report
        </Button>
      </Box>
    </Box>
  );
};

export default Index;
