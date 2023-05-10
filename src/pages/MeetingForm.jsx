import React from "react";
import Select, { components, DropdownIndicatorProps } from "react-select";
import SpriteIcon from "../components/SpriteIcon";
import iconEdit from "../images/icon-edit.svg";
import { ReactComponent as IconSelectArrow } from "../images/icon-select-arrow.svg";

import { selectTowerOptions } from "../utils/SelectTowerOptions";
import { selectFloorOptions } from "../utils/SelectFloorOptions";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <IconSelectArrow />
    </components.DropdownIndicator>
  );
};

const MeetingForm = () => {
  const [editFormData, setEditFormData] = React.useState({
    tower: "",
    floor: "",
  });

  const getSelectTowerValue = () => {
    return editFormData.tower
      ? selectTowerOptions.find((tower) => tower.value === editFormData.tower)
      : "";
  };
  const getSelectFloorValue = () => {
    return editFormData.floor
      ? selectFloorOptions.find((floor) => floor.value === editFormData.floor)
      : "";
  };

  const handleClearForm = (e) => {
    e.preventDefault();
    setEditFormData({
      tower: "",
      floor: "",
    });
  };

  return (
    <>
      <main className="meeting meeting--editform">
        <div className="meeting__form-container container">
          <div className="meeting__inner">
            <div className="meeting__content-wrapper">
              <div className="meeting__page-top">
                <div className="meeting__title-wrapper">
                  <h2 className="meeting__form-title">
                    Бронирование переговорных
                  </h2>
                  <img
                    className="meeting__title-img"
                    src={iconEdit}
                    alt="edit row"
                    width="26"
                    height="26"
                  />
                </div>
              </div>

              <section className="meeting__edit-form">
                <div className="edit-form__btn-wrapper">
                  <button
                    className="edit-form__button cancel"
                    onClick={handleClearForm}
                  >
                    Очистить
                  </button>
                </div>
                <form className="edit-form">
                  <div className="edit-form__row">
                    <label htmlFor="tower" className="edit-form__label">
                      Башня
                    </label>

                    <Select
                      className="edit-form__select"
                      classNamePrefix="custom-select"
                      options={selectTowerOptions}
                      placeholder="Выберите башню"
                      name="tower"
                      value={getSelectTowerValue()}
                      onChange={(newValue) =>
                        setEditFormData({
                          ...editFormData,
                          tower: newValue.value,
                        })
                      }
                      components={{ DropdownIndicator }}
                    />
                  </div>
                  <div className="edit-form__row">
                    <label htmlFor="floor" className="edit-form__label">
                      Этаж
                    </label>
                    <Select
                      className="edit-form__select"
                      classNamePrefix="custom-select"
                      options={selectFloorOptions}
                      placeholder="Выберите этаж"
                      name="floor"
                      value={getSelectFloorValue()}
                      onChange={(newValue) =>
                        setEditFormData({
                          ...editFormData,
                          floor: newValue.value,
                        })
                      }
                      components={{ DropdownIndicator }}
                    />
                  </div>
                  <div className="edit-form__row">
                    <label htmlFor="date" className="edit-form__label">
                      Date
                    </label>
                    <div className="edit-form__select-dropdown">
                      <input
                        type="date"
                        id="date"
                        value="2021-12-21"
                        className="edit-form__input-date"
                      />
                    </div>
                  </div>
                  <div className="edit-form__row">
                    <label htmlFor="time" className="edit-form__label">
                      Time
                    </label>
                    <div className="edit-form__select-dropdown">
                      <input
                        type="date"
                        id="time"
                        value="2021-12-21"
                        className="edit-form__input-date"
                      />
                    </div>
                  </div>

                  <button className="edit-form__button save">
                    <SpriteIcon name="save" width="26" height="26" />
                    Save
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </main>
      <div className="overlay"></div>
      <div className="modal modal__confirm">
        <div className="modal__close modal__confirm-close"></div>
        <div className="modal__inner">
          <div className="modal__img-wrapper">
            <img
              src="./images/icon-delete.svg"
              alt="delete image"
              className="modal__img"
              width="50"
              height="50"
            />
          </div>

          <h6 className="modal__msg">
            Are you sure you want to&nbsp;delete this appointment?
          </h6>
          <div className="modal__btns">
            <button className="modal__btn no">No</button>
            <button className="modal__btn yes">Yes</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetingForm;
