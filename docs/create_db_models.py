import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime, Float
from sqlalchemy.orm import declarative_base, sessionmaker
import datetime

# Creating an engine and base class
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite', echo=False)
Base = declarative_base()

# Define models
class Manufacturer(Base):
    """
    description: Table for car manufacturers.
    """
    __tablename__ = 'manufacturers'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    country = Column(String, nullable=True)

class Model(Base):
    """
    description: Table for car models.
    """
    __tablename__ = 'models'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    manufacturer_id = Column(Integer, ForeignKey('manufacturers.id'), nullable=False)
    year = Column(Integer, nullable=True)

class Battery(Base):
    """
    description: Table for battery specifications.
    """
    __tablename__ = 'batteries'
    id = Column(Integer, primary_key=True, autoincrement=True)
    capacity_kWh = Column(Float, nullable=False)
    weight_kg = Column(Float, nullable=True)

class Charger(Base):
    """
    description: Table for charger specifications.
    """
    __tablename__ = 'chargers'
    id = Column(Integer, primary_key=True, autoincrement=True)
    power_kW = Column(Float, nullable=False)
    level = Column(Integer, nullable=True)

class ChargingStation(Base):
    """
    description: Table for charging stations.
    """
    __tablename__ = 'charging_stations'
    id = Column(Integer, primary_key=True, autoincrement=True)
    location = Column(String, nullable=False)
    capacity = Column(Integer, nullable=True)

class Vehicle(Base):
    """
    description: Table for individual electric vehicles.
    """
    __tablename__ = 'vehicles'
    vin = Column(String, primary_key=True)
    model_id = Column(Integer, ForeignKey('models.id'), nullable=False)
    battery_id = Column(Integer, ForeignKey('batteries.id'), nullable=False)
    chassis_number = Column(String, nullable=True)

class ChargingSession(Base):
    """
    description: Table for tracking charging sessions.
    """
    __tablename__ = 'charging_sessions'
    id = Column(Integer, primary_key=True, autoincrement=True)
    vehicle_vin = Column(String, ForeignKey('vehicles.vin'), nullable=False)
    charging_station_id = Column(Integer, ForeignKey('charging_stations.id'), nullable=False)
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime, nullable=True)

class Owner(Base):
    """
    description: Table for vehicle owners.
    """
    __tablename__ = 'owners'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    contact_info = Column(String, nullable=True)

class VehicleOwnership(Base):
    """
    description: Table for vehicle ownership history.
    """
    __tablename__ = 'vehicle_ownerships'
    id = Column(Integer, primary_key=True, autoincrement=True)
    vin = Column(String, ForeignKey('vehicles.vin'), nullable=False)
    owner_id = Column(Integer, ForeignKey('owners.id'), nullable=False)
    purchase_date = Column(DateTime, nullable=False)

class ServiceStation(Base):
    """
    description: Table for service stations.
    """
    __tablename__ = 'service_stations'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    location = Column(String, nullable=True)

class ServiceRecord(Base):
    """
    description: Table for service records.
    """
    __tablename__ = 'service_records'
    id = Column(Integer, primary_key=True, autoincrement=True)
    vin = Column(String, ForeignKey('vehicles.vin'), nullable=False)
    service_date = Column(DateTime, nullable=False)
    service_station_id = Column(Integer, ForeignKey('service_stations.id'), nullable=False)
    description = Column(String, nullable=True)

class InsurancePolicy(Base):
    """
    description: Table for insurance policies on vehicles.
    """
    __tablename__ = 'insurance_policies'
    id = Column(Integer, primary_key=True, autoincrement=True)
    provider = Column(String, nullable=False)
    policy_number = Column(String, nullable=False, unique=True)
    vin = Column(String, ForeignKey('vehicles.vin'), nullable=False)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime, nullable=True)

# Create tables
Base.metadata.create_all(engine)

# Create a session
Session = sessionmaker(bind=engine)
session = Session()

# Add sample data
manufacturers = [
    Manufacturer(name="Tesla", country="USA"),
    Manufacturer(name="Nissan", country="Japan"),
]

models = [
    Model(name="Model S", manufacturer_id=1, year=2020),
    Model(name="Leaf", manufacturer_id=2, year=2018),
]

batteries = [
    Battery(capacity_kWh=100.0, weight_kg=600.0),
    Battery(capacity_kWh=40.0, weight_kg=250.0),
]

chargers = [
    Charger(power_kW=22.0, level=2),
    Charger(power_kW=50.0, level=3),
]

charging_stations = [
    ChargingStation(location="Station A", capacity=10),
    ChargingStation(location="Station B", capacity=5),
]

vehicles = [
    Vehicle(vin="5YJSA1E26HF000337", model_id=1, battery_id=1, chassis_number="X1234Y"),
    Vehicle(vin="1N4AZ0CP8DC403460", model_id=2, battery_id=2, chassis_number="A5678B"),
]

charging_sessions = [
    ChargingSession(vehicle_vin="5YJSA1E26HF000337", charging_station_id=1, start_time=datetime.datetime.now()),
    ChargingSession(vehicle_vin="1N4AZ0CP8DC403460", charging_station_id=2, start_time=datetime.datetime.now()),
]

owners = [
    Owner(name="John Doe", contact_info="john.doe@example.com"),
    Owner(name="Jane Smith", contact_info="jane.smith@example.com"),
]

vehicle_ownerships = [
    VehicleOwnership(vin="5YJSA1E26HF000337", owner_id=1, purchase_date=datetime.datetime(2020, 1, 1)),
    VehicleOwnership(vin="1N4AZ0CP8DC403460", owner_id=2, purchase_date=datetime.datetime(2019, 5, 20)),
]

service_stations = [
    ServiceStation(name="Tesla Service Center", location="San Francisco"),
    ServiceStation(name="Nissan Service Center", location="Tokyo"),
]

service_records = [
    ServiceRecord(vin="5YJSA1E26HF000337", service_date=datetime.datetime(2021, 6, 15), service_station_id=1,
                  description="Annual maintenance"),
    ServiceRecord(vin="1N4AZ0CP8DC403460", service_date=datetime.datetime(2021, 2, 10), service_station_id=2,
                  description="Battery replacement"),
]

insurance_policies = [
    InsurancePolicy(provider="Tesla Insurance", policy_number="POLICY123", vin="5YJSA1E26HF000337",
                    start_date=datetime.datetime(2020, 1, 1)),
    InsurancePolicy(provider="Nissan Insurance", policy_number="POLICY456", vin="1N4AZ0CP8DC403460",
                    start_date=datetime.datetime(2019, 5, 20)),
]

# Add all data to the session
session.add_all(manufacturers + models + batteries + chargers + charging_stations + 
                vehicles + charging_sessions + owners + vehicle_ownerships +
                service_stations + service_records + insurance_policies)

# Commit the session
session.commit()

# Close the session
session.close()
