<template>
  <div
    id="productModal"
    ref="modal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-black text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>{{ isNew ? '新增' : '編輯' }}產品</span>
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <VForm
          ref="form"
          v-slot="{ errors }"
          @submit="$emit('update-product', tempProduct)"
        >
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-2">
                  <div class="mb-3">
                    <label for="imageUrl" class="form-label h4"
                      >輸入主圖網址</label
                    >
                    <input
                      v-model="tempProduct.imageUrl"
                      type="text"
                      class="form-control"
                      placeholder="請輸入圖片連結"
                    />
                  </div>
                  <img
                    class="img-fluid"
                    :src="tempProduct.imageUrl"
                    :alt="tempProduct.title"
                  />

                  <div class="form-group">
                    <label for="customFile">或 上傳圖片 </label>
                    <input
                      type="file"
                      id="customFile"
                      class="form-control"
                      ref="files"
                      @change="uploadFile"
                    />
                  </div>
                </div>
                <hr />
                <p class="mb-3 h4 pt-4">多圖新增</p>
                <div class="mt-5" v-if="tempProduct.imagesUrl">
                  <div
                    v-for="(image, key) in tempProduct.imagesUrl"
                    class="mb-3"
                    :key="key"
                  >
                    <input
                      type="url"
                      class="form-control form-control"
                      v-model="tempProduct.imagesUrl[key]"
                      placeholder="請輸入連結"
                    />
                    <div>
                      <img class="img-fluid" :src="image" />
                    </div>
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      @click="tempProduct.imagesUrl.splice(key, 1)"
                    >
                      移除
                    </button>
                  </div>
                  <div
                    v-if="
                      tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1] ||
                      !tempProduct.imagesUrl.length
                    "
                  >
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-sm d-block w-100"
                      @click="tempProduct.imagesUrl.push('')"
                    >
                      新增圖片
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="mb-3">
                  <label for="title" class="form-label">標題</label>
                  <VField
                    id="title"
                    name="標題"
                    type="text"
                    class="form-control"
                    placeholder="請輸入標題"
                    v-model="tempProduct.title"
                    :class="{ 'is-invalid': errors['標題'] }"
                    rules="required"
                  />
                  <ErrorMessage name="標題" class="invalid-feedback" />
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">分類</label>
                    <VField
                      id="category"
                      name="分類"
                      type="text"
                      class="form-control"
                      placeholder="請輸入分類"
                      v-model="tempProduct.category"
                      :class="{ 'is-invalid': errors['分類'] }"
                      rules="required"
                    />
                    <ErrorMessage name="分類" class="invalid-feedback" />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">單位</label>
                    <VField
                      id="unit"
                      name="單位"
                      type="text"
                      class="form-control"
                      placeholder="請輸入單位"
                      v-model="tempProduct.unit"
                      :class="{ 'is-invalid': errors['單位'] }"
                      rules="required"
                    />
                    <ErrorMessage name="單位" class="invalid-feedback" />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label">原價</label>
                    <VField
                      id="origin_price"
                      type="number"
                      name="原價"
                      min="0"
                      class="form-control"
                      placeholder="請輸入原價"
                      v-model.number="tempProduct.origin_price"
                      :class="{ 'is-invalid': errors['原價'] }"
                      rules="required|min_value:0|numeric"
                    />
                    <ErrorMessage name="原價" class="invalid-feedback" />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">售價</label>
                    <VField
                      id="price"
                      type="number"
                      name="售價"
                      min="0"
                      class="form-control"
                      placeholder="請輸入售價"
                      v-model.number="tempProduct.price"
                      :class="{ 'is-invalid': errors['售價'] }"
                      rules="required|min_value:0|numeric"
                    />
                    <ErrorMessage name="售價" class="invalid-feedback" />
                  </div>
                </div>
                <hr />
                <div class="mb-3">
                  <label for="description" class="form-label">產品描述</label>
                  <textarea
                    id="description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入產品描述"
                    v-model="tempProduct.description"
                  >
                  </textarea>
                </div>
                <div class="mb-3">
                  <p>說明內容</p>
                  <ckeditor
                    :editor="editor"
                    :config="editorConfig"
                    v-model="tempProduct.content"
                  ></ckeditor>
                </div>
                <hr />
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">國家</label>
                    <input
                      id="country"
                      type="text"
                      class="form-control"
                      placeholder="請輸入國家"
                      v-model="tempProduct.country"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">產區</label>
                    <input
                      id="area"
                      type="text"
                      class="form-control"
                      placeholder="請輸入產區"
                      v-model="tempProduct.area"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">處理方法</label>
                    <input
                      id="production"
                      type="text"
                      class="form-control"
                      placeholder="請輸入處理方法"
                      v-model="tempProduct.production"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">烘焙度</label>
                    <input
                      id="roast"
                      type="text"
                      class="form-control"
                      placeholder="請輸入烘焙程度"
                      v-model.number="tempProduct.roast"
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      class="form-check-input"
                      type="checkbox"
                      v-model="tempProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_enabled">{{
                      tempProduct.is_enabled ? '啟用' : '未啟用'
                    }}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-gray"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button type="submit" class="btn btn-dark" :disabled="isProcessing">
              <span
                class="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
                v-if="isProcessing"
              ></span>
              {{ isNew ? '新增產品' : '更新產品' }}
            </button>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';
import Toast from '@/utils/Toast';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
    isNew: {
      type: Boolean,
      default: false,
    },
    isProcessing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      modal: {},
      tempProduct: {},
      editor: ClassicEditor,
      editorConfig: {
        toolbar: {
          items: ['heading', 'bold', 'italic', 'link', 'undo', 'redo', '|'],
        },
      },
    };
  },
  mixins: [modalMixin],
  watch: {
    product() {
      this.tempProduct = this.product;
      if (!this.tempProduct.imagesUrl) {
        this.tempProduct.imagesUrl = [];
      }
      if (!this.tempProduct.imageUrl) {
        this.tempProduct.imageUrl = '';
      }
    },
  },
  methods: {
    uploadFile() {
      const upLoadedFile = this.$refs.files.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', upLoadedFile);
      this.$http
        .post(`${VITE_API}/api/${VITE_PATH}/admin/upload`, formData)
        .then((res) => {
          this.tempProduct.imageUrl = res.data.imageUrl;
          this.$refs.files.value = '';
        })
        .catch(() => {
          Toast.fire({
            title: '檔案格式不符',
            icon: 'error',
          });
        });
    },
  },
};
</script>
