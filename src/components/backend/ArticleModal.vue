<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-black text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>{{ isNew ? '新增貼文' : '編輯貼文' }}</span>
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
          @submit="$emit('update-article', tempArticle)"
        >
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-3">
                  <label for="title" class="form-label">標題</label>
                  <VField
                    type="text"
                    name="標題"
                    class="form-control"
                    id="title"
                    v-model="tempArticle.title"
                    :class="{ 'is-invalid': errors['標題'] }"
                    rules="required"
                    placeholder="請輸入標題"
                  />
                  <ErrorMessage name="標題" class="invalid-feedback" />
                </div>
                <div class="mb-3">
                  <label for="image" class="form-label">輸入圖片網址</label>
                  <VField
                    type="text"
                    name="圖片"
                    class="form-control"
                    id="image"
                    v-model="tempArticle.imageUrl"
                    :class="{ 'is-invalid': errors['圖片'] }"
                    rules="required|url"
                    placeholder="請輸入圖片連結"
                  />
                  <ErrorMessage name="圖片" class="invalid-feedback" />
                </div>
                <div class="mb-3">
                  <label for="author" class="form-label"> 作者 </label>
                  <VField
                    type="text"
                    name="作者"
                    class="form-control"
                    id="author"
                    v-model="tempArticle.author"
                    :class="{ 'is-invalid': errors['作者'] }"
                    rules="required"
                    placeholder="請輸入作者"
                  />
                  <ErrorMessage name="作者" class="invalid-feedback" />
                </div>
                <div class="mb-3">
                  <label for="create_at">文章建立日期</label>
                  <input
                    type="date"
                    class="form-control"
                    id="create_at"
                    v-model="create_at"
                  />
                </div>
              </div>
              <div class="col-sm-8">
                <label for="tag" class="form-label">標籤</label>
                <div class="row gx-1 mb-3">
                  <div
                    class="col-md-2 mb-1"
                    v-for="(label, key) in tempArticle.tag"
                    :key="`${label}tag`"
                  >
                    <div class="input-group input-group-sm">
                      <input
                        type="text"
                        class="form-control form-control"
                        id="tag"
                        v-model="tempArticle.tag[key]"
                        placeholder="請輸入標籤"
                      />
                      <button
                        type="button"
                        class="btn btn-outline-danger"
                        @click="tempArticle.tag.splice(key, 1)"
                      >
                        <i class="bi bi-x"></i>
                      </button>
                    </div>
                  </div>
                  <div
                    class="col-md-2 mb-1"
                    v-if="
                      tempArticle.tag[tempArticle.tag.length - 1] ||
                      !tempArticle.tag.length
                    "
                  >
                    <button
                      class="btn btn-outline-primary btn-sm d-block w-100"
                      type="button"
                      @click="tempArticle.tag.push('')"
                    >
                      新增標籤
                    </button>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="description" class="form-label">文章描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    v-model="tempArticle.description"
                    placeholder="請輸入文章描述"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <p>文章內容</p>
                  <ckeditor
                    :editor="editor"
                    :config="editorConfig"
                    v-model="tempArticle.content"
                  ></ckeditor>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="tempArticle.isPublic"
                      id="isPublic"
                    />
                    <label class="form-check-label" for="isPublic">
                      是否公開
                    </label>
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
              確認
            </button>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  props: {
    article: {
      type: Object,
      default() {
        return {};
      },
    },
    isNew: {
      type: Boolean,
      default: true,
    },
    isProcessing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      modal: {},
      tempArticle: {
        tag: [''],
      },
      create_at: 0,
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
    article() {
      this.tempArticle = {
        ...this.article,
        tag: this.article.tag || [],
        isPublic: this.article.isPublic || false,
      };
      [this.create_at] = new Date(this.tempArticle.create_at * 1000)
        .toISOString()
        .split('T');
    },
    create_at() {
      this.tempArticle.create_at = Math.floor(new Date(this.create_at) / 1000);
    },
  },
};
</script>
