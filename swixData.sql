CREATE TABLE tb_cancelationPolicy(
    cancel_policyID INT NOT NULL PRIMARY KEY,
    descrp  TEXT ,
    parameters TEXT
);

CREATE TABLE propertyOnChain(
	leaseID VARCHAR(255) NOT NULL PRIMARY KEY,
    leaseIndex INT NOT NULL,
    city_address TEXT NOT NULL,
    numberOfGuests INT NOT NULL ,
    duration   INT NOT NULL  ,
    cancel_policyID INT NOT NULL,
    start_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   FOREIGN KEY (cancel_policyID) REFERENCES tb_cancelationPolicy(cancel_policyID)
);

CREATE TABLE propertyOffChain(
id INT AUTO_INCREMENT PRIMARY KEY,
    leaseID VARCHAR(255) NOT NULL,
    Params TEXT ,
    city VARCHAR(255) NOT NULL,
    noOfRooms INT NOT NULL,
    FOREIGN KEY (leaseID) REFERENCES propertyOnChain(leaseID)
);

CREATE TABLE nights(
	nightID VARCHAR(255) PRIMARY KEY,
    price DECIMAL NOT NULL,
    availab  BOOLEAN NOT NULL
);

CREATE TABLE tb_city(
	id INT AUTO_INCREMENT PRIMARY KEY,
	cityName VARCHAR(255),
    cityCode CHAR(10) NOT NULL ,
    city_address  VARCHAR(255) NOT NULL
);

CREATE TABLE tb_bookings(
    bookingID VARCHAR(12)  PRIMARY KEY,,
    user_address VARCHAR(255) NOT NULL,
    end INT NOT NULL,
    fullRefundUntil INT NOT NULL DEFAULT 0,
    halfRefundUntil INT NOT NULL DEFAULT 0, 
     bookingPrice INT NOT NULL,,
    tokenbackRate INT NOT NULL DEFAULT 0,
    kycHash VARCHAR(255) NOT NULL,
    swixConfirmation BOOLEAN NOT NULL,
     status INT NOT NULL DEFAULT 0
);




