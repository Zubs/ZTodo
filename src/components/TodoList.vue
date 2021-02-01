<template>
	<v-app>
		<v-container>
			<v-text-field placeholder="What needs to be done..." v-model="newTodo" @keyup.enter="saveTodo" clearable class="mx-5"></v-text-field>
			<v-textarea v-if="newTodo" placeholder="Enter Additional Details Here..." class="mx-5" rows="1" v-model="newTodoDetail" clearable auto-grow @keyup.enter="saveTodo"></v-textarea>
			<v-list flat subheader three-line>
				<v-subheader>Todos</v-subheader>

				<v-list-item-group v-model="settings" multiple active-class="">
					<v-list-item v-for="(todo, index) in todos" :key="todo.id">
						<template>
							<v-list-item-action>
								<v-checkbox :input-value="todo.completed"></v-checkbox>
							</v-list-item-action>

							<v-list-item-content @click="editTodo(index)">
								<v-list-item-title>{{ todo.title }}</v-list-item-title>
								<v-list-item-subtitle v-if="todo.body">{{ todo.body }}</v-list-item-subtitle>
							</v-list-item-content>

							<v-list-item-action>
								<v-btn text icon @click="deleteTodo(index)">
									<v-icon>mdi-close</v-icon>
								</v-btn>
							</v-list-item-action>
						</template>
					</v-list-item>
				</v-list-item-group>

				<v-list-item-group multiple active-class="" v-if="!todos.length">
					<v-list-item>
						<template>
							<v-list-item-content>
								<v-list-item-title>No Todo Yet</v-list-item-title>
								<v-list-item-subtitle>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, maiores error dicta facilis quidem iusto. Nostrum nemo, vel dicta porro hic dolore quo, alias mollitia possimus ipsam dolores reprehenderit voluptatem.</v-list-item-subtitle>
							</v-list-item-content>
						</template>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-container>
	</v-app>
</template>

<script>
	export default {
		data () {
			return {
				newTodo: '',
				newTodoDetail: '',
				newTodoIndex: '',
				todos: [
					{
						'id': 1,
						'title': 'Do not die',
						'body': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi sapiente est culpa, amet distinctio quisquam eum praesentium autem, velit, in accusantium eaque quia fugiat expedita laborum fuga esse. Ullam, est?',
						'completed': false
					},
					{
						'id': 2,
						'title': 'Do not die again',
						'body': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi sapiente est culpa, amet distinctio quisquam eum praesentium autem, velit, in accusantium eaque quia fugiat expedita laborum fuga esse. Ullam, est?',
						'completed': false
					},
				],
				settings: []
			}
		},

		methods: {
			saveTodo () {
				if (this.newTodo) {
					
					if (this.newTodoIndex) {
						this.todos[this.newTodoIndex].title = this.newTodo;
						this.todos[this.newTodoIndex].body = this.newTodoDetail;
					} else {
						this.todos.push({
							'id': this.todos.length + 1,
							'title': this.newTodo,
							'completed': false,
							'body': this.newTodoDetail ? this.newTodoDetail : '',
						});					}
					this.newTodo = '';
					this.newTodoDetail = '';
					this.newTodoIndex = '';
				}
			},

			deleteTodo (index) {
				this.todos.splice(index, 1);
			},

			editTodo (index) {
				this.newTodo = this.todos[index].title;
				this.newTodoDetail = this.todos[index].body;
				this.newTodoIndex = index;
			}
		}
	}
</script>