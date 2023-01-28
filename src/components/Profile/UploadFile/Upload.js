import React from "react";
import "./Upload.scss";
import { FiUploadCloud } from "react-icons/fi";

const Upload = () => {
  return (
    <>
      <section>
        <form action="" method="POST" enctype="multipart/form-data">
          <div class="uploadcontainer">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="control-label">Upload CV</label>
                  <div class="preview-zone hidden">
                    <div class="box box-solid">
                      <div class="box-header with-border">
                        <div class="box-tools pull-right"></div>
                      </div>
                      <div class="box-body"></div>
                    </div>
                  </div>
                  <div class="dropzone-wrapper">
                    <div class="dropzone-desc">
                      <i class="glyphicon glyphicon-download-alt"></i>
                      <p>Choose an image file or drag it here.</p>
                      <FiUploadCloud style={{ fontSize: "50px" }} />
                    </div>

                    <input type="file" name="img_logo" class="dropzone" />
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <button
                  type="submit"
                  class="pull-right"
                  style={{ marginLeft: "90%", marginTop: "4rem" }}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Upload;
