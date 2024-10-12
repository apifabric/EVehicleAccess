# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 12, 2024 20:52:33
# Database: sqlite:////tmp/tmp.4xLn1ckmwG/EVehicleAccess/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Battery(SAFRSBaseX, Base):
    """
    description: Table for battery specifications.
    """
    __tablename__ = 'batteries'
    _s_collection_name = 'Battery'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    capacity_kWh = Column(Float, nullable=False)
    weight_kg = Column(Float)

    # parent relationships (access parent)

    # child relationships (access children)
    VehicleList : Mapped[List["Vehicle"]] = relationship(back_populates="battery")



class Charger(SAFRSBaseX, Base):
    """
    description: Table for charger specifications.
    """
    __tablename__ = 'chargers'
    _s_collection_name = 'Charger'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    power_kW = Column(Float, nullable=False)
    level = Column(Integer)

    # parent relationships (access parent)

    # child relationships (access children)



class ChargingStation(SAFRSBaseX, Base):
    """
    description: Table for charging stations.
    """
    __tablename__ = 'charging_stations'
    _s_collection_name = 'ChargingStation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    location = Column(String, nullable=False)
    capacity = Column(Integer)

    # parent relationships (access parent)

    # child relationships (access children)
    ChargingSessionList : Mapped[List["ChargingSession"]] = relationship(back_populates="charging_station")



class Manufacturer(SAFRSBaseX, Base):
    """
    description: Table for car manufacturers.
    """
    __tablename__ = 'manufacturers'
    _s_collection_name = 'Manufacturer'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    country = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    ModelList : Mapped[List["Model"]] = relationship(back_populates="manufacturer")



class Owner(SAFRSBaseX, Base):
    """
    description: Table for vehicle owners.
    """
    __tablename__ = 'owners'
    _s_collection_name = 'Owner'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    contact_info = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    VehicleOwnershipList : Mapped[List["VehicleOwnership"]] = relationship(back_populates="owner")



class ServiceStation(SAFRSBaseX, Base):
    """
    description: Table for service stations.
    """
    __tablename__ = 'service_stations'
    _s_collection_name = 'ServiceStation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    location = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    ServiceRecordList : Mapped[List["ServiceRecord"]] = relationship(back_populates="service_station")



class Model(SAFRSBaseX, Base):
    """
    description: Table for car models.
    """
    __tablename__ = 'models'
    _s_collection_name = 'Model'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    manufacturer_id = Column(ForeignKey('manufacturers.id'), nullable=False)
    year = Column(Integer)

    # parent relationships (access parent)
    manufacturer : Mapped["Manufacturer"] = relationship(back_populates=("ModelList"))

    # child relationships (access children)
    VehicleList : Mapped[List["Vehicle"]] = relationship(back_populates="model")



class Vehicle(SAFRSBaseX, Base):
    """
    description: Table for individual electric vehicles.
    """
    __tablename__ = 'vehicles'
    _s_collection_name = 'Vehicle'  # type: ignore
    __bind_key__ = 'None'

    vin = Column(String, primary_key=True)
    model_id = Column(ForeignKey('models.id'), nullable=False)
    battery_id = Column(ForeignKey('batteries.id'), nullable=False)
    chassis_number = Column(String)
    allow_client_generated_ids = True

    # parent relationships (access parent)
    battery : Mapped["Battery"] = relationship(back_populates=("VehicleList"))
    model : Mapped["Model"] = relationship(back_populates=("VehicleList"))

    # child relationships (access children)
    ChargingSessionList : Mapped[List["ChargingSession"]] = relationship(back_populates="vehicle")
    InsurancePolicyList : Mapped[List["InsurancePolicy"]] = relationship(back_populates="vehicle")
    ServiceRecordList : Mapped[List["ServiceRecord"]] = relationship(back_populates="vehicle")
    VehicleOwnershipList : Mapped[List["VehicleOwnership"]] = relationship(back_populates="vehicle")



class ChargingSession(SAFRSBaseX, Base):
    """
    description: Table for tracking charging sessions.
    """
    __tablename__ = 'charging_sessions'
    _s_collection_name = 'ChargingSession'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    vehicle_vin = Column(ForeignKey('vehicles.vin'), nullable=False)
    charging_station_id = Column(ForeignKey('charging_stations.id'), nullable=False)
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime)

    # parent relationships (access parent)
    charging_station : Mapped["ChargingStation"] = relationship(back_populates=("ChargingSessionList"))
    vehicle : Mapped["Vehicle"] = relationship(back_populates=("ChargingSessionList"))

    # child relationships (access children)



class InsurancePolicy(SAFRSBaseX, Base):
    """
    description: Table for insurance policies on vehicles.
    """
    __tablename__ = 'insurance_policies'
    _s_collection_name = 'InsurancePolicy'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    provider = Column(String, nullable=False)
    policy_number = Column(String, nullable=False, unique=True)
    vin = Column(ForeignKey('vehicles.vin'), nullable=False)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime)

    # parent relationships (access parent)
    vehicle : Mapped["Vehicle"] = relationship(back_populates=("InsurancePolicyList"))

    # child relationships (access children)



class ServiceRecord(SAFRSBaseX, Base):
    """
    description: Table for service records.
    """
    __tablename__ = 'service_records'
    _s_collection_name = 'ServiceRecord'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    vin = Column(ForeignKey('vehicles.vin'), nullable=False)
    service_date = Column(DateTime, nullable=False)
    service_station_id = Column(ForeignKey('service_stations.id'), nullable=False)
    description = Column(String)

    # parent relationships (access parent)
    service_station : Mapped["ServiceStation"] = relationship(back_populates=("ServiceRecordList"))
    vehicle : Mapped["Vehicle"] = relationship(back_populates=("ServiceRecordList"))

    # child relationships (access children)



class VehicleOwnership(SAFRSBaseX, Base):
    """
    description: Table for vehicle ownership history.
    """
    __tablename__ = 'vehicle_ownerships'
    _s_collection_name = 'VehicleOwnership'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    vin = Column(ForeignKey('vehicles.vin'), nullable=False)
    owner_id = Column(ForeignKey('owners.id'), nullable=False)
    purchase_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    owner : Mapped["Owner"] = relationship(back_populates=("VehicleOwnershipList"))
    vehicle : Mapped["Vehicle"] = relationship(back_populates=("VehicleOwnershipList"))

    # child relationships (access children)
