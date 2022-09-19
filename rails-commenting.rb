# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# This populates when you create a controller, the controller handles all the RESTful actions of the application
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # creates an instanced variable called posts that is assigned all the entries in the BlogPost table
    @posts = BlogPost.all
  end

  # ---3)
  # creates a method with an instanced variable that is assigned a specific entry in the BlogPost table identified by id
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # creates a method with an instanced variable that is assigned to a form
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # creates an instanced variable that is assigned to the query that creates instances of the BlogPost model with params that are validated with strong_params
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    # creates an instanced variable that is assigned the query which displays a form to the user
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # performs a patch on what's assigned to the instanced variable and validates through strong params
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # if the destroy fails for whatever reason, return to the url of the blog post identified in @post
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)  
  # these are methods hidden from the user, but accessible to the developer
  private
  def blog_post_params
    # ---10)
    # for the blog post table, only allow the parameters of title and content
    params.require(:blog_post).permit(:title, :content)
  end
end
