import pandas as pd

# Creating a mock list of contacts
contacts = [
    {"Contact Name": "John Doe", "Email": "john.doe@companyA.com", "Phone Number": "123-456-7890", "Job Title": "Chief Executive Officer", "Company": "Company A", "Miller-Heimann Role": "Economic Buyer"},
    {"Contact Name": "Jane Smith", "Email": "jane.smith@companyB.com", "Phone Number": "123-456-7891", "Job Title": "IT Director", "Company": "Company B", "Miller-Heimann Role": "Technical Buyer"},
    {"Contact Name": "Alice Johnson", "Email": "alice.johnson@companyA.com", "Phone Number": "123-456-7892", "Job Title": "Sales Director", "Company": "Company A", "Miller-Heimann Role": "User Buyer"},
    {"Contact Name": "Bob Brown", "Email": "bob.brown@companyC.com", "Phone Number": "123-456-7893", "Job Title": "Marketing Manager", "Company": "Company C", "Miller-Heimann Role": "Coach"},
    {"Contact Name": "Charlie Davis", "Email": "charlie.davis@companyB.com", "Phone Number": "123-456-7894", "Job Title": "CFO", "Company": "Company B", "Miller-Heimann Role": "Economic Buyer"},
    {"Contact Name": "Dana White", "Email": "dana.white@companyA.com", "Phone Number": "123-456-7895", "Job Title": "IT Manager", "Company": "Company A", "Miller-Heimann Role": "Technical Buyer"},
    {"Contact Name": "Evan Green", "Email": "evan.green@companyC.com", "Phone Number": "123-456-7896", "Job Title": "Product Manager", "Company": "Company C", "Miller-Heimann Role": "User Buyer"},
    {"Contact Name": "Fiona Black", "Email": "fiona.black@companyB.com", "Phone Number": "123-456-7897", "Job Title": "HR Director", "Company": "Company B", "Miller-Heimann Role": "Coach"},
    {"Contact Name": "George Hill", "Email": "george.hill@companyA.com", "Phone Number": "123-456-7898", "Job Title": "Operations Manager", "Company": "Company A", "Miller-Heimann Role": "User Buyer"},
    {"Contact Name": "Holly Wood", "Email": "holly.wood@companyC.com", "Phone Number": "123-456-7899", "Job Title": "CEO", "Company": "Company C", "Miller-Heimann Role": "Economic Buyer"},
    {"Contact Name": "Ian Wright", "Email": "ian.wright@companyB.com", "Phone Number": "123-456-7800", "Job Title": "Logistics Manager", "Company": "Company B", "Miller-Heimann Role": "Technical Buyer"},
    {"Contact Name": "Jack Taylor", "Email": "jack.taylor@companyA.com", "Phone Number": "123-456-7801", "Job Title": "Sales Manager", "Company": "Company A", "Miller-Heimann Role": "User Buyer"},
    {"Contact Name": "Karen Scott", "Email": "karen.scott@companyC.com", "Phone Number": "123-456-7802", "Job Title": "CIO", "Company": "Company C", "Miller-Heimann Role": "Technical Buyer"},
    {"Contact Name": "Laura King", "Email": "laura.king@companyB.com", "Phone Number": "123-456-7803", "Job Title": "Legal Counsel", "Company": "Company B", "Miller-Heimann Role": "Coach"},
    {"Contact Name": "Mike Allen", "Email": "mike.allen@companyA.com", "Phone Number": "123-456-7804", "Job Title": "Customer Service Manager", "Company": "Company A", "Miller-Heimann Role": "User Buyer"}
]

